import * as React from 'react';
import { Color } from '../../Models/color';

interface CloseColorRowProps {
    color: Color;
    closeColor: Color;
    visible: boolean;
}

export default class CloseColorRow extends React.Component<CloseColorRowProps, {}> {

    render() {

        const color: Color = this.props.color;
        const closeColor: Color = this.props.closeColor;
        return (
                    <div className="row inner">
                        <div className="col-xs-2 text-center vertically-centered">{closeColor.number}</div>
                        <div className="col-xs-4 vertically-centered">{closeColor.description}</div>
                        <div className="col-xs-3" style={{backgroundColor: '#' + closeColor.rgbCode, height: '38px'}} />
                        <div className="col-xs-3" style={{backgroundColor: '#' + color.rgbCode, height: '38px'}} />
                    </div>
        );
    }
}
