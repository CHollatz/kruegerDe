/* eslint-disable react-hooks/exhaustive-deps */
import Slider from '@material-ui/core/Slider';
import React, { useEffect, useRef, useState } from "react";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AudioButton } from ".";


interface IAudioPlayer {
    audioSrc: string;
}

export const AudioPlayer = (props: IAudioPlayer) => {
    const { audioSrc } = props;
    const [audio] = useState(new Audio(audioSrc));
    const [playing, setPlaying] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0)
    const [dragActive, setDragActive] = useState<boolean>(false)
    const [volume, setVolume] = React.useState(100);
    const seekRef = useRef<any>()

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (!playing && interval) {
            clearInterval(interval)
        } else if (playing) {
            interval = setInterval(() => {
                updateWidth()
                if (audio?.ended) {
                    setPlaying(false)
                    audio.currentTime = 0
                    updateWidth()
                }
            }, 200);
        }
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [playing])


    const updateWidth = () => {
        const _width = audio.currentTime / audio.duration * 100
        setWidth(_width)
    }

    const handlePlayPause = () => {
        let i = 0;
        if (audio.readyState === 0 && i < 50) {
            audio.load()
        }
        try {
            if (playing) {
                audio.pause()
            } else {
                audio.play()
            }
            setPlaying(!playing)
        } catch (error) {
            console.log('could not play file', error)
        }
    }

    const handleRewind = () => {
        if (audio.currentTime < 6) {
            audio.currentTime = 0
        } else {
            audio.currentTime = audio.currentTime - 5
        }
        updateWidth()
    }

    const handleForward = () => {
        if (audio.currentTime + 5 > audio.duration) {
            audio.currentTime = audio.duration
            audio.pause()
        } else {
            audio.currentTime = audio.currentTime + 5
        }
        updateWidth()
    }

    const handleSeek = (e: { nativeEvent: { offsetX: any; offsetY: any; }; }, isClick: boolean) => {
        if (!dragActive && !isClick) {
            return
        }
        const mousePos = e.nativeEvent.offsetX
        const target = seekRef.current;
        const width = target.getBoundingClientRect().width;
        audio.currentTime = audio.duration * (mousePos / width)
        updateWidth()
    }

    const handleVolume = (vol: number) => {
        setVolume(vol)
        audio.volume = vol / 100
    }

    const theme = createTheme({
        overrides: {
            MuiSlider: {
                root: {
                    width: '12rem', marginRight: '1.5rem'
                },
                colorPrimary: {
                    color: '#1F2937',
                },
                rail: {
                    height: '1rem', borderRadius: '0.5rem'
                },
                track: {
                    height: '1rem', borderRadius: '0.5rem'
                },
                thumb: {
                    height: '1.5rem', width: '1.5rem'
                },
                thumbColorPrimary: {
                    color: '#E5E7EB'
                },
            },
        },
    });

    const renderDurationText = () => {
        return null
        // if (audio.duration) {
        //     return <p className='text-2xl font-bold select-none bg-gray-800 text-gray-200 rounded-lg p-2'>{Math.floor(audio.currentTime)} | {Math.floor(audio.duration)}</p>
        // }
    }

    const renderControls = () => {
        return (
            <div>
                <div className='hidden 2xl:flex flex-row justify-between px-4 py-2'>
                    <div className='flex flex-row space-x-4'>
                        <AudioButton type="rewind" onClick={() => handleRewind()} />
                        <AudioButton type={!playing ? 'play' : 'pause'} onClick={() => handlePlayPause()} />
                        <AudioButton type="forward" onClick={() => handleForward()} />
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <ThemeProvider theme={theme}>
                            <Slider value={volume} onChange={(event, newValue) => handleVolume(Array.isArray(newValue) ? newValue[0] : newValue)} aria-labelledby="continuous-slider" />
                        </ThemeProvider>
                        <AudioButton type="download" downloadSrc={audioSrc} />
                    </div>
                </div>
                <div className='flex 2xl:hidden flex-col justify-between px-4 py-2'>
                    <div className='flex flex-row space-x-4'>
                        <AudioButton type="rewind" onClick={() => handleRewind()} />
                        <AudioButton type={!playing ? 'play' : 'pause'} onClick={() => handlePlayPause()} />
                        <AudioButton type="forward" onClick={() => handleForward()} />
                        <AudioButton type="download" downloadSrc={audioSrc} />
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <ThemeProvider theme={theme}>
                            <Slider value={volume} onChange={(event, newValue) => handleVolume(Array.isArray(newValue) ? newValue[0] : newValue)} aria-labelledby="continuous-slider" />
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-blue-900 relative'>
            <div className='bg-blue-400 h-20 rounded-lg' style={{ width: `${width}%`, transition: 'width: 0.1s ease-in' }}>
                <div className='absolute h-20 top-0 left-0 right-0 cursor-pointer rounded-lg border-2 border-blue-400 flex justify-center items-center' ref={seekRef} onMouseDown={() => setDragActive(true)} onMouseUp={() => setDragActive(false)} onMouseMove={(e) => handleSeek(e, false)} onClick={(e) => handleSeek(e, true)}>{renderDurationText()}</div>
            </div>
            {renderControls()}
        </div>
    )
}