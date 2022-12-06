import { useEffect } from 'react'
import { TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import {
  Extrapolate,
  interpolate,
  measure,
  runOnJS,
  runOnUI,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
} from 'react-native-reanimated'
import wait from '~helpers/wait'
import { useAppSwitcherContext } from '../AppSwitcherProvider'
import useMeasureTabPreview from '../utils/useMesureTabPreview'
import useTabConstants from '../utils/useTabConstants'
import { useTabAnimations } from '../utils/worklets'

const useTabPreview = ({
  index,
  onDelete,
}: {
  index: number
  onDelete: (idx: number) => void
}) => {
  const { activeTabPreview, tabPreviews, scrollView } = useAppSwitcherContext()
  const measureTabPreview = useMeasureTabPreview()
  // @ts-ignore: FIXME(TS) correct type for createAnimatedComponent
  tabPreviews.refs[index] = useAnimatedRef<AnimatedBox>()
  const ref = tabPreviews.refs[index]

  const { expandTab } = useTabAnimations()

  const {
    TAB_PREVIEW_WIDTH,
    TAB_PREVIEW_HEIGHT,
    TAB_BORDER_RADIUS,
    WIDTH,
    HEIGHT,
    STATUS_BAR_HEIGHT,
    SCREEN_MARGIN,
  } = useTabConstants()

  // On mount, measure the initial tab preview
  useEffect(() => {
    if (index === activeTabPreview.index.value) {
      ;(async () => {
        await wait(300)
        const { pageX, pageY } = await measureTabPreview(index)
        activeTabPreview.top.value = pageY
        activeTabPreview.left.value = pageX
        activeTabPreview.zIndex.value = 3

        const scrollToTop = pageY - STATUS_BAR_HEIGHT - SCREEN_MARGIN
        runOnUI(scrollTo)(scrollView.ref, 0, scrollToTop, false)
      })()
    }
  }, [])

  const onTap = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onEnd: () => {
      if (activeTabPreview.animationProgress.value !== 0) {
        return
      }
      // measure the image
      // width/height and position to animate from it to the full screen one
      const measurements = measure(ref)
      expandTab({ index, left: measurements.pageX, top: measurements.pageY })
    },
  })

  const onClose = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onEnd: () => {
      activeTabPreview.zIndex.value = 1
      runOnJS(onDelete)(index)

      // If deleting last tab, choose the previous one
      if (tabPreviews.refs.length - 1 === activeTabPreview.index.value) {
        activeTabPreview.index.value -= 1
      }
    },
  })

  const boxStyles = useAnimatedStyle(() => {
    if (activeTabPreview.index.value === index) {
      return {
        position: 'relative',
        zIndex: activeTabPreview.zIndex.value,
      }
    }
    return {
      position: 'relative',
      zIndex: 2,
    }
  })

  const previewImageStyles = useAnimatedStyle(() => {
    if (activeTabPreview.index.value === index) {
      return {
        width: interpolate(
          activeTabPreview.animationProgress.value,
          [0, 1],
          [TAB_PREVIEW_WIDTH, WIDTH]
        ),
        height: interpolate(
          activeTabPreview.animationProgress.value,
          [0, 1],
          [TAB_PREVIEW_HEIGHT, HEIGHT]
        ),
        top: interpolate(
          activeTabPreview.animationProgress.value,
          [0, 1],
          [0, -activeTabPreview.top.value]
        ),
        left: interpolate(
          activeTabPreview.animationProgress.value,
          [0, 1],
          [0, -activeTabPreview.left.value]
        ),
        borderRadius: TAB_BORDER_RADIUS,
      }
    }

    return {
      width: TAB_PREVIEW_WIDTH,
      height: TAB_PREVIEW_HEIGHT,
      top: 0,
      left: 0,
      borderRadius: TAB_BORDER_RADIUS,
    }
  })

  const textStyles = useAnimatedStyle(() => {
    if (activeTabPreview.index.value === index) {
      return {
        top: interpolate(
          activeTabPreview.animationProgress.value,
          [0, 1],
          [0, -activeTabPreview.top.value]
        ),
        left: interpolate(
          activeTabPreview.animationProgress.value,
          [0, 1],
          [0, -activeTabPreview.left.value]
        ),
        opacity: interpolate(
          activeTabPreview.animationProgress.value,
          [0, 1],
          [1, 0],
          Extrapolate.CLAMP
        ),
      }
    }

    return {}
  })

  const xStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        activeTabPreview.animationProgress.value,
        [0, 1],
        [1, 0],
        Extrapolate.CLAMP
      ),
    }
  })

  return {
    ref,
    boxStyles,
    previewImageStyles,
    textStyles,
    xStyles,
    onTap,
    onClose,
  }
}

export default useTabPreview
