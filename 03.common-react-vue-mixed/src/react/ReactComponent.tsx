import { commonMsg } from '../common/common'
import { foo } from './utils'

export default function ReactComponent({ msg }: { msg: string; }) {
  return (
    <p>{commonMsg}: {foo}: {msg}</p>
  )
}
