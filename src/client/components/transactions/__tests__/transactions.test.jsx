/**
 * @jest-environment node
 */
import React from 'react';
import Enzyme from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Transactions from '../transactions';
import {createStore} from "redux";
import {reducer} from "../../../core/reducers/reducer";

describe('<Transactions />', () => {
  it('should render correctly', () => {
    const component = render(<Transactions store={createStore(reducer)} />);
    expect(component).toMatchSnapshot();
  });
});
