"use cleint"

import { useDraggableWindow } from "../../hooks/useDraggableWindow";

type DraggableWindowProps = {
    title: string;
    index: number;
    children: React.ReactNode;
    onClose: () => void;

}



export default function DraggableWindow({ title, index, children, onClose }: DraggableWindowProps) {

    const { windowProps, dragHandleProps, isDragging } = useDraggableWindow(true)
    

}