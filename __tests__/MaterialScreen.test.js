import {fireEvent, render, waitFor} from "@testing-library/react-native";
import MaterialScreen from "../src/screens/material/MaterialScreen";
import React from 'react';
import MaterialItem from "../src/screens/material/MaterialItem";

describe('Material Screen', () => {
    const MATERIAL_SUBJECT_MOCK = [
        {
            id: '1',
            title: 'Mock 1',
            description: 'Mock Material 1',
            duration: '1',
        },
        {
            id: '2',
            title: 'Mock 2',
            description: 'Mock Material 2',
            duration: '2',
        },
    ];
    it('renders correctly', () => {
        const blocMock = jest.fn();
        blocMock.mockReturnValue({
            materialData: [],
            isLoading: false
        });
        const {toJSON} = render(<MaterialScreen bloc={blocMock}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders list material correctly', () => {
        const blocMock = jest.fn();
        blocMock.mockReturnValue({
            materialData: MATERIAL_SUBJECT_MOCK,
            isLoading: false
        });
        const {getByTestId} = render(<MaterialScreen bloc={blocMock}/>);
        expect(getByTestId('material-row-0')).toBeDefined();
        expect(getByTestId('material-row-1')).toBeDefined();
    });
    it('renders detail material correctly', () => {
        const blocMock = jest.fn();
        blocMock.mockReturnValue({
            materialData: MATERIAL_SUBJECT_MOCK,
            isLoading: false
        });
        const navigate = jest.fn();
        const {getByTestId} = render(<MaterialScreen navigation={{navigate}} bloc={blocMock}/>);
        const materialItem1 = getByTestId('material-row-0');
        fireEvent.press(materialItem1);
        expect(navigate).toHaveBeenCalledWith("MaterialInfoModal", {"itemInfo": MATERIAL_SUBJECT_MOCK[0]});
    });

    it('renders material item info correctly', () => {
        const navigation = jest.fn();
        const materialSubjectMock = MATERIAL_SUBJECT_MOCK[0]
        const {getByText} = render(<MaterialItem info={materialSubjectMock} index={0}
                                                 modalNavigation={navigation}/>);
        expect(getByText(materialSubjectMock.title)).not.toBeNull();
        expect(getByText(materialSubjectMock.description)).not.toBeNull();
    });
});