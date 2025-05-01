import { createContext, PropsWithChildren, useContext } from 'react';

interface ColorPickerContextProps {
	onColorItemClick?: (color: string) => void;
}

const ColorPickerContext = createContext<ColorPickerContextProps>({});

const ColorPickerProvider = ({
	onColorItemClick,
	children,
}: ColorPickerContextProps & PropsWithChildren) => {
	return (
		<ColorPickerContext.Provider value={{ onColorItemClick }}>
			{children}
		</ColorPickerContext.Provider>
	);
};

export default ColorPickerProvider;

export const useColorPickerContext = () => useContext(ColorPickerContext);
