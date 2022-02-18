

const ThumbnailUrlBlock = ({URL, index}) => {

    const style = {
        backgroundImage: `url('${URL}')`,
        width:    "250px",
        height:     "250px",
        backgroundSize: "contain",
        display:  "block",
        backgroundColor: index % 2 == 0 ? "orange"  : "blue"
    }

    return (
        <>Url{index}<br/><div style={style}></div></>
    )
}

export default ThumbnailUrlBlock