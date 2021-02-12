import Image from 'next/image'
import * as S from './styles'

export type CardProps = {
  image: string
  meaning: string
}

const Card = ({ image, meaning }: CardProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image src={`/img/${image}.png`} alt={meaning} width={280} height={280} />
    </S.ImageWrapper>

    <S.Block>
      <S.English>{meaning}</S.English>
    </S.Block>
    {/* <'S.Block>
      <S.English>{meaning}</S.English>
    </S.Block>' */}
  </S.Wrapper>
)

export default Card
