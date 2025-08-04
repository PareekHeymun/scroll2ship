import '../../styles/Button.css'
interface Props {
  text: string;
}
export default function Button({text}:Props){
    return (
        <button id="SubmitButton"> {text} </button>
    )
}