import * as React from 'react';
import { Color, ColorDistanceMatrix } from '../../Models/color';
import CloseColorRow from './close-color-row';
import './color-row.css';


interface ColorRowProps {
    color: Color;
    colors: ColorDistanceMatrix;
}

interface ColorRowState {
    expanded: boolean;
}

export default class ColorRow extends React.Component<ColorRowProps, ColorRowState> {

    constructor() {
        super();
        this.state = {
            expanded: false
        }
    }

    onRowClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const color: Color = this.props.color;
        return (
            <tbody>
                <tr onClick={this.onRowClick}>
                    <td className='text-center'>{color.Floss}</td>
                    <td style={{backgroundColor: '#' + color.RGBcode}}></td>
                    <td>{color.Description}</td>
                    {color.Distances.slice(0, 5).map(closeColor =>
                        <td title={`${closeColor.Floss} - ${this.props.colors[closeColor.Floss].Description}`} style={{backgroundColor: '#' + this.props.colors[closeColor.Floss].RGBcode}} />
                    )}
                </tr>
                <tr className={this.state.expanded ? '' : 'hidden'}>
                    <td colSpan={8}>
                    <table>
                        <tbody>

                {color.Distances.slice(0, 5).map(closeColor =>
                    <CloseColorRow visible={this.state.expanded} color={color} closeColor={this.props.colors[closeColor.Floss]} />
                )}
                        </tbody>
                    </table>
                    </td>
                </tr>
            {/*<CloseColorTable color={this.props.color} colors={this.props.colors} />*/}
            </tbody>
        );
    }
}