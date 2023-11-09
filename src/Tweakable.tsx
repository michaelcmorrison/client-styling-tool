import { ElementType, ReactNode, useState } from "react";

type Props = {
    tag: ElementType
    children?: ReactNode 
}

export const Tweakable = ({ tag = "h1", children }: Props) => {

    const [fontSize, setFontSize] = useState<string>("16");
    const [letterSpacing, setLetterSpacing] = useState<string>("0");
    const [lineHeight, setLineHeight] = useState<string>("1");

    const Tag = tag
    return (
        <Tag style={{fontSize: `${fontSize}px`, letterSpacing: `${letterSpacing}px`, lineHeight: lineHeight}}>
            {children}
            <input onChange={({target: { value }}) => setFontSize(value)} className="is-block" type="number" value={fontSize} min={12} max={4 * 24} step={4} />
            <input onChange={({target: { value }}) => setLetterSpacing(value)} className="is-block" type="number" value={letterSpacing} min={-10} max={10} step={1} />
            <input onChange={({target: { value }}) => setLineHeight(value)} className="is-block" type="number" value={lineHeight} min={1} max={1.65} step={.05} />
        </Tag>
    )
}