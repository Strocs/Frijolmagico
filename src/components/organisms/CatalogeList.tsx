import type { Cataloge } from '@/interfaces/cataloge.d.ts'
import { CatalogeCard } from './CatalogeCard'
import { useCataloge } from '@/hooks/useCataloge'

interface CatalogeProps {
  list: Cataloge
}

export const CatalogeList = ({ list }: CatalogeProps) => {
  const { cataloge } = useCataloge(list)

  return (
    <ul className="flex gap-4 py-10 flex-wrap">
      {cataloge.map((item) => (
        <CatalogeCard key={item.name} {...item} />
      ))}
    </ul>
  )
}
