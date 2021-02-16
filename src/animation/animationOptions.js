class AnimationApi {
    setAnimation(animationType, controlsForAnimation, animationRef, dotsIndex) {
        if (animationRef) {
            if (/^translate/.test(animationType) && controlsForAnimation.next) {
                animationRef.current.animate(
                    [
                        {
                            transform: 'translateX(100%)',
                            opasity: 1,
                        },
                        {
                            transform: 'translateX(0%)',
                            opasity: 0,
                        },
                    ],
                    {
                        delay: 2,
                        duration: 500,
                        iterations: 1,
                        easing: 'ease-in-out',
                    }
                )
            }
            if (/^translate/.test(animationType) && controlsForAnimation.prew) {
                animationRef.current.animate(
                    [
                        {
                            transform: 'translateX(-100%)',
                            opasity: 1,
                        },
                        {
                            transform: 'translateX(0%)',
                            opasity: 0,
                        },
                    ],
                    {
                        delay: 2,
                        duration: 500,
                        iterations: 1,
                        easing: 'ease-in-out',
                    }
                )
            }
            if (/^scale/.test(animationType) && controlsForAnimation.next) {
                animationRef.current.animate(
                    [
                        {
                            transform: 'scaleX(0)',
                            margin: '0 0 0 50%',
                            opasity: 1,
                        },
                        {
                            transform: 'scaleX(1)',
                            margin: '0',
                            opasity: 0,
                        },
                    ],
                    {
                        delay: 3,
                        duration: 800,
                        iterations: 1,
                        easing: 'ease-in-out',
                    }
                )
            }
            if (/^scale/.test(animationType) && controlsForAnimation.prew) {
                animationRef.current.animate(
                    [
                        {
                            transform: 'scaleX(0)',
                            margin: '0 50% 0 0',
                            opasity: 1,
                        },
                        {
                            transform: 'scaleX(1)',
                            margin: '0',
                            opasity: 0,
                        },
                    ],
                    {
                        delay: 3,
                        duration: 800,
                        iterations: 1,
                        easing: 'ease-in-out',
                    }
                )
            }
            if (/^translate/.test(animationType) && controlsForAnimation.dots) {
                if (dotsIndex.prewIndex < dotsIndex.currentIndex) {
                    animationRef.current.animate(
                        [
                            {
                                transform: 'translateX(100%)',
                                opasity: 1,
                            },
                            {
                                transform: 'translateX(0%)',
                                opasity: 0,
                            },
                        ],
                        {
                            delay: 2,
                            duration: 500,
                            iterations: 1,
                            easing: 'ease-in-out',
                        }
                    )
                }
                if (dotsIndex.prewIndex > dotsIndex.currentIndex) {
                    animationRef.current.animate(
                        [
                            {
                                transform: 'translateX(-100%)',
                                opasity: 1,
                            },
                            {
                                transform: 'translateX(0%)',
                                opasity: 0,
                            },
                        ],
                        {
                            delay: 2,
                            duration: 500,
                            iterations: 1,
                            easing: 'ease-in-out',
                        }
                    )
                }
            }
            if (/^scale/.test(animationType) && controlsForAnimation.dots) {
                animationRef.current.animate(
                    [
                        {
                            transform: 'scaleX(0)',
                            opasity: 1,
                        },
                        {
                            transform: 'scaleX(1)',
                            opasity: 0,
                        },
                    ],
                    {
                        delay: 3,
                        duration: 800,
                        iterations: 1,
                        easing: 'ease-in-out',
                    }
                )
            }
        }
    }
    getAnimation() {
        return this.setAnimation()
    }
}
export default new AnimationApi()
