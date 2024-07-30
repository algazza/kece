import styles from "../data/style"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Button = () => {
  return (
    <button className="border-2 border-merahh py-2 px-4 rounded-xl mt-4">
      <span className={`text-merahh ${styles.fontBodyBold} mr-4`}>Telusuri Lebih Dalam</span>
      <ArrowDownwardIcon className="text-merahh place-items-center animate-bounce"/>
    </button>
  )
}

export default Button