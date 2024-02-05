import { useEffect, useMemo } from "react";
import { Patterns, PatternsConfig } from "../interfaces/patterns";

interface Props {
    onSetPattern: (pattern: string) => void;
}
export const Pattern = ({ onSetPattern }: Props) => {
    const patternConfigs: Record<Patterns, PatternsConfig> = {
        [Patterns.ONE]: {
            content:
                <pattern id="colorfulPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#FFD700"/>
                    <circle cx="8" cy="8" r="2" fill="#87CEEB"/>
                </pattern>,
            id: 'colorfulPattern',
        },
        [Patterns.TWO]: {
            content:
                <pattern id="diagonalLines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="#FF6347" strokeWidth="2"/>
                </pattern>,
            id: 'diagonalLines',
        },
        [Patterns.THREE]: {
            content:
                <pattern id="stripes" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="10" height="5" fill="#FF4500"/>
                    <rect x="0" y="5" width="10" height="5" fill="#FFD700"/>
                </pattern>,
            id: 'stripes',
        },
        [Patterns.FOUR]: {
            content:
                <pattern id="checkerboard" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="10" height="10" fill="#0000FF"/>
                    <rect x="10" y="10" width="10" height="10" fill="#0000FF"/>
                </pattern>,
            id: 'checkerboard'
        },
        [Patterns.FIVE]: {
            content:
                <pattern id="smallSquaresGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="5" height="5" fill="#6A5ACD"/>
                    <rect x="5" y="5" width="5" height="5" fill="#6A5ACD"/>
                </pattern>,
            id: 'smallSquaresGrid',
        },
        [Patterns.SIX]: {
            content:
                <pattern id="hatchedLines" width="10" height="10" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="10" y2="10" stroke="#A52A2A" strokeWidth="1"/>
                    <line x1="0" y1="10" x2="10" y2="0" stroke="#A52A2A" strokeWidth="1"/>
                </pattern>,
            id: 'hatchedLines',
        },
        [Patterns.SEVEN]: {
            content:
                <pattern id="diagonalStripes" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect x="0" y="0" width="10" height="5" fill="#FF8C00"/>
                    <rect x="0" y="5" width="10" height="5" fill="#FFEFD5"/>
                </pattern>,
            id: 'diagonalStripes',
        },
        [Patterns.EIGHT]: {
            content:
                <pattern id="horizontalStripes" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="10" height="2" fill="#008000"/>
                </pattern>,
            id: 'horizontalStripes',
        },
        [Patterns.NINE]: {
            content:
                <pattern id="zigzagPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 0 10 L 5 0 L 10 10" fill="none" stroke="#FF69B4" strokeWidth="1"/>
                </pattern>,
            id: 'zigzagPattern',
        },
        [Patterns.TEN]: {
            content:
                <pattern id="crosshatchPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 0 0 L 10 10 M 10 0 L 0 10" stroke="#20B2AA" strokeWidth="1"/>
                </pattern>,
            id: 'crosshatchPattern',
        }
    }

    const getPatternConfig = (): Patterns => {
        const patternValues = Object.values(Patterns);
        const randomIndex = Math.floor(Math.random() * patternValues.length);
        return patternValues[randomIndex];
    };

    const mainPattern = useMemo(() => getPatternConfig(), []);

    const mainPatternConfig = patternConfigs[mainPattern];

    useEffect(() => {
        onSetPattern(mainPatternConfig.id);
    }, []);

    return (
        <>
            { mainPatternConfig.content }
        </>
    );
};