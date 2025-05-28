import successImg from "./assets/success.png"
import warningImg from "./assets/warning.png"
import errorImg from "./assets/error.png"
import neutralImg from "./assets/neutral.png"

export default function Banner({children=null, variant="neutral"}) {

    const titleObj = {
        "success": "Congratulations",
        "warning": "Attention",
        "error": "There is a problem with your application",
        "neutral": "Update Available"
    }

    const imgObj = {
        "success": successImg,
        "warning": warningImg,
        "error": errorImg,
        "neutral": neutralImg
    }

    function checkVariants() {
        const variantsArr = ["success", "warning", "error", "neutral"]
        return variantsArr.includes(variant.toLowerCase()) ? variant = variant.toLowerCase() : variant = "neutral"
    }
    
    checkVariants()

    return (
        <div className={`banner banner-${variant}`}>
            <div>
                <img src={imgObj[variant]} alt="" />
            </div>
            <div className={`banner-content `}>
                <h3>{titleObj[variant]}</h3>
                {children}
            </div>
        </div>
    )
}