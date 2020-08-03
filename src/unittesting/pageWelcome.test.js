import React from "react";
import PageWelcome from "../views/welcome/pageWelcome";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('<PageWelcome />', () => {
    it('should ini <Pagewelcome/> one button', () => {
        const appComponent = shallow(<PageWelcome/>);
        //yang di harapkan dari case ini sesuai atau tidak
        expect(appComponent.find('button').length).toBe(1)
    });
    it('should ini <Pagewelcome/> three div', () => {
        const appComponent = shallow(<PageWelcome/>);
        //yang di harapkan dari case ini sesuai atau tidak
        expect(appComponent.find('div').length).toBe(3)
    });
})