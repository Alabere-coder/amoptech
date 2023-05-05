import btnStyles from '../styles/Button.module.css'

type Props = {
  btnText: string;
}

const ButtonPrimary = ({btnText}: Props) => {
  return (
    <button className={btnStyles.btn}>
        {btnText}
    </button>
  )
}

export default ButtonPrimary