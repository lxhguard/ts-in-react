import * as React from 'react';
import ListView from '../components/ListView';

interface IState {
    dataInfo: {
        result:[]
    }
}

export default class List extends React.Component<{}, IState>{

    public constructor(props: any){
        super(props);
        this.state = {
            dataInfo:{
                result:[]
            }
        };
    }

    public componentDidMount = () => {
        fetch("https://api.apiopen.top/musicRankings")
        .then(res => res.json())
        .then(data => {
            console.log(data.result)
            this.setState({
                dataInfo:data
            });

        })
    }
    

    public render(){
        return (
            <div>
                {
                    this.state.dataInfo.result.length > 0
                    ?
                    <ul>
                        {
                                this.state.dataInfo.result.map((element,index)=>{
                                    return <ListView key={index} data={element} />
                            })
                        }
                    </ul>
                    :
                    <div> 数据正在请求... </div>
                }
            </div>
        )
    }
}