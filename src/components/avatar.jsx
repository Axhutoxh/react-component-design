import { useMemo } from "react";

const Avatar =(props)=>{

    const avatarColor = props?.bgColor==='white'&&props['text-color']==='white'?'black':props['text-color']||'white';
    
    const adjustFontSize = ()=>{
        const size = +props.size
        const textSize = +props['text-size']
    
        if(textSize>size || textSize+10 > size){
            return size/2
        }
        return textSize>=16 ? textSize :16
    }

    const avatarStyle = {
        height:`${props?.size}px` ||'50px',
        width:`${props?.size}px` || '50px',
        backgroundImage:`url(${props.src})`,
        backgroundColor:props?.bgColor||'grey',
        backgroundRepeat:'no-repeat',
        backgroundSize:"cover",
        backgroundPosition:"center",
        color:avatarColor,
        borderRadius:props.square?'0%':props.rounded?'12%':'50%',
        fontSize:props.src?'0px': `${adjustFontSize()}px`||'16px',
        padding:'10px',
        margin:'10px',
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
 cd .
        ...props.style
    }


    const getAvatarText = useMemo(()=>{
    
        const trimmedText = props.name.trim()
        const text = trimmedText.split(' ')
        console.log(text)

        if(text.length>1){
            return text[0][0].toUpperCase()+text[0][1].toUpperCase()
        }
        return text[0][0].toUpperCase()
    },[props.name])

    return(
        <div style={avatarStyle} className={props.class}>   
           {getAvatarText}
        </div>
    )
}


export default Avatar