import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import img1 from "../../assets/img/faces/avatar.jpg";
import img2 from "../../assets/img/examples/studio-2.jpg"
import img3 from "../../assets/img/examples/studio-3.jpg"
import img4 from "../../assets/img/examples/studio-4.jpg"
import img5 from "../../assets/img/examples/studio-5.jpg"

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: [img1,img2,img3,img4,img5,],
      index: 0,
      categories: 
        {
          arte: 0,
          economicas: 0,
          ingenieria: 0,
          humanidades: 0,
        },
    };

    this.yesFunc = this.yesFunc.bind(this);
    this.noFunc = this.noFunc.bind(this);
  }

  yesFunc(){
    
    if(this.state.index < this.state.imgArray.length - 1){
      this.setState({index: this.state.index + 1}, () => {
        console.log("arrlgt", this.state.imgArray.length);
        console.log("index", this.state.index);
      })
    }
  }

  noFunc(){
    if(this.state.index < this.state.imgArray.length - 1){
      this.setState({index: this.state.index + 1}, () => {
        console.log("arrlgt", this.state.imgArray.length);
        console.log("index", this.state.index);
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h1>Vocational Test</h1>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={4} sm={4} md={4}>
              <Card style={{ background: "white", height: "600px", width: "400px", padding: "50px", margin: "80px" }}>
                <CardMedia style={{ height: "400px", width: "300px" }} image={this.state.imgArray[this.state.index]} />
                <CardContent>
                  <GridContainer style={{ margin: "30px" }} justify="center">
                    <GridItem xs={6} sm={6} md={6}>
                      <Button style={{ height:"60px", width:"80px",background:"red",fontSize: "20px"}} onClick = {this.noFunc} variant="contained" color="primary">NO</Button>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <Button style={{ height:"60px", width:"80px", background:"green",fontSize: "20px" }} onClick = {this.yesFunc} variant="contained" color="primary">SI</Button>
                    </GridItem>
                  </GridContainer>
                </CardContent>
              </Card>
            </GridItem>
          </GridContainer>

        </div>
      </div>
    );
  }
}

export default Test;