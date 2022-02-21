import {Recipe} from '@/components/Recipe'
import { useRouter } from 'next/router'

const RecipePage = () => {
  const { id } = useRouter().query
  return (
    <Recipe id={id as string} />
  )
}

export default RecipePage