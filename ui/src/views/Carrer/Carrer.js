import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {API} from '../../API/API.js';
import { Route } from 'react-router-dom'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import Content from "./Content.js";

class ProfilePage extends React.Component {
  state={
    data: false
  }

  componentDidMount = async () => {
    const id = this.props.history.location.state
    // if(this.props.history.location.state){
      const data = await API.getData('/Career/CareerData/'+id)
      this.setState({data: data},() => console.log(this.state) )
    // }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
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
         <Parallax small image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title} style={{color:'white'}}>
                {this.state.data && this.state.data.career_name}
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  {this.state.data &&
                    <Content
                      data={this.state.data}
                    />
                  }
                  {
                    this.state.data &&
                    <Route render={({ history }) => (
                          <Button 
                            simple 
                            color="success"
                            size="lg"
                            onClick={() => { history.push('/socio-perfil',3) }}
                          >
                          Socio Virtual
                        </Button>
                    )} />
                  }
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);


