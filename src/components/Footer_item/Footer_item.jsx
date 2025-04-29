import "../Footer_item/Footer_item.css"

export default function Footer_item(props){
    return (
        <>
            <div className="Footer_item">
                <p className="footer_text1">{props.text1}</p>
                <p className='footer_text2'>{props.text2}</p>
                <p className='footer_text2'>{props.text3}</p>
                <p className='footer_text2'>{props.text4}</p>
                <p className='footer_text2'>{props.text5}</p>
            </div>
        </>
    )
}