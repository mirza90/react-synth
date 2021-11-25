import { useEffect, useState } from "react";


export const useKey = (targetKey: string) => {
    const [pressed, setPressed] = useState(false);
    const onKeyDown = (key: KeyboardEvent ) => {
        if (targetKey === key.key) setPressed(true);
    };
    const onKeyUp = (key: KeyboardEvent) => {
        if (targetKey === key.key) setPressed(false);
    };
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, []);
    return pressed;
};

export const useKeysPress = () => {
    const [key, setKey] = useState("");
    const [keysPressed, setKeyPressed] = useState(new Set([""]));
    let clonedSet;

    const onKeyDown = (e: KeyboardEvent) => {
        setKey(e.key);
        setKeyPressed(keysPressed.add(e.key));
    };
    const onKeyUp = (e: KeyboardEvent) => {
        setKey("");
        clonedSet = new Set(keysPressed);
        clonedSet.delete(e.key);
        setKeyPressed(clonedSet);
    };
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, []);
    return [key, keysPressed];
};
