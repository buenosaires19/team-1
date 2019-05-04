import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import classNames from "classnames";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import img1 from "../../assets/img/examples/cem.jpg"
import img2 from "../../assets/img/examples/cco.jpg"
import img3 from "../../assets/img/examples/ce.jpg"
import img4 from "../../assets/img/examples/cs.jpg"
import img5 from "../../assets/img/examples/ing.jpg"


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: [{ img: img1, type: "cem" }, { img: img2, type: "cco" }, { img: img3, type: "ce" }, { img: img4, type: "cs" }, { img: img5, type: "ing" }],
      index: 0,
      categories:
      {
        cem: 0,
        cco: 0,
        ce: 0,
        cs: 0,
        ing: 0,
      },
    };

    // Ciencias Empresariales
    // Ciencias de la Comunicación
    // Ciencias Economicas
    // Ciencias Sociales
    // Ingenieria

    this.yesFunc = this.yesFunc.bind(this);
    this.noFunc = this.noFunc.bind(this);
  }

  increase() {
    switch (this.state.imgArray[this.state.index].type) {
      case "cem":
        this.setState({ categories: { cem: this.state.categories.cem + 1, cco: this.state.categories.cco, ce: this.state.categories.ce, cs: this.state.categories.cs, ing: this.state.categories.ing } })
        break;
      case "cco":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco + 1, ce: this.state.categories.ce, cs: this.state.categories.cs, ing: this.state.categories.ing } })
        break;
      case "ce":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco, ce: this.state.categories.ce + 1, cs: this.state.categories.cs, ing: this.state.categories.ing } })
        break;
      case "cs":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco, ce: this.state.categories.ce, cs: this.state.categories.cs + 1, ing: this.state.categories.ing } })
        break;
      case "ing":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco, ce: this.state.categories.ce, cs: this.state.categories.cs, ing: this.state.categories.ing + 1 } })
        break;
      default:
    }
  }

  decrease() {
    switch (this.state.imgArray[this.state.index].type) {
      case "cem":
        this.setState({ categories: { cem: this.state.categories.cem - 1, cco: this.state.categories.cco, ce: this.state.categories.ce, cs: this.state.categories.cs, ing: this.state.categories.ing } })
        break;
      case "cco":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco - 1, ce: this.state.categories.ce, cs: this.state.categories.cs, ing: this.state.categories.ing } })
        break;
      case "ce":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco, ce: this.state.categories.ce - 1, cs: this.state.categories.cs, ing: this.state.categories.ing } })
        break;
      case "cs":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco, ce: this.state.categories.ce, cs: this.state.categories.cs - 1, ing: this.state.categories.ing } })
        break;
      case "ing":
        this.setState({ categories: { cem: this.state.categories.cem, cco: this.state.categories.cco, ce: this.state.categories.ce, cs: this.state.categories.cs, ing: this.state.categories.ing - 1 } })
        break;
      default:
    }
  }

  yesFunc() {
    this.increase()
    this.setState({ index: this.state.index + 1 }, () => {
      console.log("CATEGORIES: ", this.state.categories);
    })
  }

  noFunc() {
    this.decrease();
    this.setState({ index: this.state.index + 1 }, () => {
      console.log("CATEGORIES: ", this.state.categories);

    })
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    if (this.state.index < this.state.imgArray.length) {
      return (
        <div className={classNames(classes.main, classes.mainRaised)}>
          <Header
            color="transparent"
            brand="NextStep"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 200,
              color: "white"
            }}
            {...rest}
          />
          <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
          <div className={classes.profile}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
           
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card image="" style={{ background: "white", height: "600px", width: "200px" }}>
                  <CardMedia style={{ height: "400px", width: "300px" }} image={this.state.imgArray[this.state.index].img} />
                  <CardContent>
                    <GridContainer style={{ margin: "30px" }}>
                      <GridItem xs={6} sm={6} md={6}>
                        <Button style={{ height: "60px", width: "100%", background: "red", fontSize: "20px" }} onClick={this.noFunc} variant="contained" color="primary">✘</Button>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <Button style={{ height: "60px", width: "100%", background: "green", fontSize: "20px" }} onClick={this.yesFunc} variant="contained" color="primary">✔</Button>
                      </GridItem>
                    </GridContainer>
                  </CardContent>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
        ;
    } else {
      let max = [{ max: 0, type: "default" }]
      let interes = {
        cem: 'Ciencias Empresariales',
        cco: 'Ciencias de la Comunicación',
        ce: 'Ciencias Economicas',
        cs: 'Ciencias Sociales',
        ing: 'Ingenieria',
      }

      for (var property in this.state.categories) {
        console.log("LOG", property, " ", this.state.categories[property]);
        if (this.state.categories[property] > max[0].max) {
          max = [];
          max.push({ max: this.state.categories[property], type: property });
        } else if (this.state.categories[property] === max[0].max) {
          max.push({ max: this.state.categories[property], type: property });
        }
      }

      let rnd = Math.floor(Math.random() * (max.length - 1))
      console.log('random', rnd);
      console.log('MAX LGT', max.length);
      let selected = max[rnd].type

      return (
        <div>
          <Redirect to={{
            pathname: '/carrer',
            state: 3
        }}
/>
        </div>
      )
    }
  }
}

export default withStyles(profilePageStyle)(Test);
