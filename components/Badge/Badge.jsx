export default function Badge({children = "Badge", variant = "square", color = "gray"}) {

    function checkVariant() {
        const validVariants=["square", "pill"]

        return validVariants.includes(variant.toLowerCase()) ? variant.toLowerCase() : variant = "square"
    }

    function checkColor() {
        const validColors=["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]

        return validColors.includes(color.toLocaleLowerCase()) ? color.toLowerCase() : color = "gray"
    }

    checkVariant()
    checkColor()

    const className = `badge-${variant} badge-${color}`

    return (
        <div className={"badge" + " " + className}> 
            {children}
        </div>
    )
}