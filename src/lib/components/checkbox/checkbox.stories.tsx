import React, {useState} from 'react';
import Checkbox from './checkbox';
import FlexRow from "../flex-row/flex-row";
import FlexColumn from "../flex-column/flex-column";
import BodyText from "../body-text/body-text";

export default {
    component: Checkbox,
    title: 'Checkbox'
};

const Checked = () => {
   return  (
       <FlexRow itemsSpacing={10}>
           <FlexColumn itemsSpacing={10}>
               <Checkbox checked label="checked"/>
           </FlexColumn>
       </FlexRow>
   )
}

const Unchecked = () => {
    return  (
        <FlexRow itemsSpacing={10}>
            <FlexColumn itemsSpacing={10}>
                <Checkbox checked={false} label="unchecked"/>
            </FlexColumn>
        </FlexRow>
    )
}

const Disabled = () => {
    return  (
        <FlexRow itemsSpacing={10}>
            <FlexColumn itemsSpacing={10}>
                <Checkbox checked disabled label="disabled"/>
            </FlexColumn>
        </FlexRow>
    )
}

const Handled = () => {
    const [isChecked, setIsChecked] = useState(false);
    return  (
        <FlexRow itemsSpacing={10}>
            <FlexColumn itemsSpacing={10}>
                <Checkbox checked={isChecked} label="check it" onChange={() => setIsChecked(prevState => !prevState)}/>
            </FlexColumn>
        </FlexRow>
    )
}

export const allStates = () => (
    <FlexRow itemsSpacing={10}>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={2}>States</BodyText>
            {Checked()}
            {Unchecked()}
            {Disabled()}
        </FlexColumn>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={2}>Action</BodyText>
            {Handled()}
        </FlexColumn>
    </FlexRow>
);

