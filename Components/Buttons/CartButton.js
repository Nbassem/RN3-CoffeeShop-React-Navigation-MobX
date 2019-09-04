import React, { Component } from "react";
import { Icon, Button } from "native-base";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    return (
      <Button
        transparent
        onPress={() => this.props.navigation.navigate("CoffeeItem")}
      >
        <Icon type="AntDesign" name="shoppingcart" />
      </Button>
    );
  }
}

export default withNavigation(CartButton);
