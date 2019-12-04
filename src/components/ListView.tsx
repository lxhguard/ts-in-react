import * as React from 'react';

interface IProps {
    data: {
        name: string,
        comment: string,
        bg_pic: string,
    }
}

export default class ListView extends React.Component<IProps>{
    
    public render(){
        const { data } = this.props;
        return (
            <div>
                <p>{ data.name }</p>
                <p>{ data.comment }</p>
                <img src={data.bg_pic} width="200" />
                <p>------------------------------------</p>
            </div>
        )
    }
}