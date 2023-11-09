import { ElementType, ReactNode, useState } from "react";

type Props = {
    tag: ElementType
    children?: ReactNode 
}

export const Tweakable = ({ tag = "h1", children }: Props) => {

    const [fontSize, setFontSize] = useState<string>("16");
    const [letterSpacing, setLetterSpacing] = useState<string>("0");
    const [lineHeight, setLineHeight] = useState<string>("1");
    const [fontWeight, setFontWeight] = useState<string>("400");

    const Tag = tag
    return (
        <div className="box">
            <Tag style={{fontSize: `${fontSize}px`, letterSpacing: `${letterSpacing}px`, lineHeight: lineHeight, fontWeight: fontWeight}}>
                {children}
            </Tag>
            <label htmlFor="font-size">Font Size</label>
            <input id="font-size" onChange={({target: { value }}) => setFontSize(value)} type="number" value={fontSize} min={12} max={4 * 24} step={4} />
            <label htmlFor="letter-spacing">Letter Spacing</label>
            <input id="letter-spacing" onChange={({target: { value }}) => setLetterSpacing(value)} type="number" value={letterSpacing} min={-10} max={10} step={1} />
            <label htmlFor="line-height">Line Height</label>
            <input id="line-height" onChange={({target: { value }}) => setLineHeight(value)} type="number" value={lineHeight} min={1} max={1.65} step={.05} />
            <label htmlFor="font-weight">Font Weight</label>
            <input id="font-weight" onChange={({target: { value }}) => setFontWeight(value)} type="number" value={fontWeight} min={100} max={900} step={100} />
        </div>
        
    )
}