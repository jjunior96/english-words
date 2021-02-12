/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { RefreshOutline } from '@styled-icons/evaicons-outline/RefreshOutline'
import { VolumeUpOutline } from '@styled-icons/evaicons-outline/VolumeUpOutline'

import data from 'data/words'
import Card from 'components/Card'

import * as S from './styles'

type Word = {
  img: string
  mean: string
  category: string
}

const Main = () => {
  const randomWord = () => Math.floor(Math.random() * data.length)
  const [word, setWord] = useState<Word>(data[randomWord()])
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const voices = window.speechSynthesis?.getVoices()
    const enVoice = voices?.find((voice) => /en-US/.test(voice.lang))

    setVoice(enVoice || voices?.[0])
  }, [])

  const speak = (word: string) => {
    const patchedWord = word?.split('-').join('')
    const utterance = new SpeechSynthesisUtterance()

    utterance.text = patchedWord
    utterance.lang = 'en-US'
    utterance.voice = voice
    utterance.rate = 0.8

    window.speechSynthesis.speak(utterance)
  }

  return (
    <>
      <S.Block>
        <Card image={word.img} meaning={word.mean} />

        <S.IconWrapper>
          <S.Icon>
            <VolumeUpOutline
              onClick={() => speak(word.mean)}
              title="Hear the pronunciation"
            />
          </S.Icon>

          <S.IconRotate>
            <RefreshOutline
              onClick={() => setWord(data[randomWord()])}
              title="Get new word"
            />
          </S.IconRotate>
        </S.IconWrapper>
      </S.Block>

      <S.Warning>
        * This application uses the new Web Speech API, so it might not work
        correctly in some browsers/devices.
      </S.Warning>

      <S.Footer>
        Made with <a href="https://nextjs.org/">NextJS</a> and
        <span> ❤️ </span> by{' '}
        <a href="https://devjuniorplus.com.br">Junior Alves</a>
      </S.Footer>

      <S.Footer>
        Totally inspired by{' '}
        <a href="https://japanese-words.vercel.app/">Japanese Words</a>
      </S.Footer>
    </>
  )
}

export default Main
