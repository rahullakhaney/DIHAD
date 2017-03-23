import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.subContainer}>
         <ScrollView>
            <Text>
            Cupcake fruitcake muffin liquorice candy canes. Jujubes chocolate bar ice cream powder candy dessert marzipan icing. Topping jujubes lollipop sesame snaps soufflé cheesecake marshmallow croissant oat cake. Fruitcake chupa chups candy canes lemon drops gummi bears marzipan wafer gummies. Tiramisu chocolate donut pudding sugar plum caramels marzipan lollipop. Fruitcake gummi bears icing dragée tart marshmallow cake sweet chupa chups. Chocolate cake candy canes chocolate bar jelly beans cotton candy carrot cake sugar plum bear claw. Powder pastry tart tart donut pie lemon drops powder. Chupa chups chocolate cake tiramisu. Toffee gingerbread dragée apple pie gummies. Jujubes cheesecake sugar plum pastry jelly beans biscuit. Sweet fruitcake cake liquorice muffin cake cookie gummi bears. Cotton candy bear claw sweet ice cream sweet biscuit carrot cake toffee cake. Caramels oat cake danish cupcake biscuit tootsie roll pie.
Icing cookie candy tootsie roll bear claw cotton candy cupcake. Bear claw wafer gummies. Pudding candy lemon drops. Bonbon chocolate bar sesame snaps carrot cake cake chocolate cake pudding. Sweet candy canes jelly candy canes pastry candy canes topping. Cotton candy oat cake croissant. Danish bonbon soufflé. Chocolate bar chupa chups tootsie roll chupa chups marzipan wafer. Donut bonbon lemon drops sugar plum sesame snaps. Powder dragée tiramisu powder cake dragée gingerbread muffin jelly beans. Pie croissant macaroon dessert candy carrot cake. Jelly sesame snaps bear claw cotton candy croissant soufflé. Apple pie lemon drops topping. Liquorice candy canes soufflé.
Jujubes pie cheesecake croissant tootsie roll dragée. Sweet chocolate cake cheesecake sugar plum cake icing brownie halvah. Candy cheesecake toffee bear claw cheesecake sweet chocolate bar halvah. Croissant wafer chocolate bar soufflé tart lemon drops danish halvah pudding. Tootsie roll muffin halvah marshmallow tiramisu oat cake. Brownie halvah jelly beans cake powder bonbon. Chocolate cake cheesecake bear claw jelly beans brownie danish marzipan fruitcake. Jelly beans croissant pastry jelly brownie chupa chups cheesecake. Jujubes lemon drops caramels sweet muffin brownie cupcake carrot cake dessert. Fruitcake liquorice sweet sweet sweet roll. Dessert ice cream dragée candy topping candy canes dessert gummies topping. Sweet sweet roll macaroon fruitcake bonbon toffee sweet roll donut. Pastry carrot cake bonbon icing icing candy pie sweet.
Cake dragée fruitcake cake. Cheesecake icing gingerbread. Dragée lemon drops jelly wafer halvah jujubes icing gingerbread. Tart jujubes topping chocolate bar. Donut bear claw cheesecake cotton candy chupa chups. Gummi bears croissant jelly brownie topping chupa chups tiramisu. Soufflé muffin dragée chocolate bear claw bonbon. Marzipan chocolate cake caramels brownie tootsie roll. Cake chocolate ice cream pudding bonbon dessert bear claw chupa chups cookie. Pie gummies pudding. Tootsie roll chupa chups carrot cake marzipan donut. Candy canes halvah dragée. Chocolate bar pie cookie apple pie fruitcake sugar plum croissant cake dragée. Candy cake lollipop candy sweet roll.
Dessert sugar plum dragée lollipop donut carrot cake. Cheesecake biscuit dragée sesame snaps oat cake toffee. Cheesecake halvah gingerbread pudding topping carrot cake wafer. Chocolate bar brownie sweet cupcake wafer dessert caramels. Biscuit soufflé powder candy cookie powder. Lemon drops powder sweet chocolate bar halvah apple pie cotton candy jelly-o dragée. Tart marshmallow soufflé. Cupcake tart wafer marzipan. Ice cream cotton candy bear claw. Lollipop biscuit liquorice carrot cake tootsie roll jelly beans soufflé. Marzipan cupcake danish. Muffin powder sweet roll jelly beans liquorice. Sweet toffee jelly beans. Cake dragée gummi bears muffin cheesecake cake gummi bears jelly beans.
            </Text>
         </ScrollView>
         </View>
         <View style={styles.floaterBar}>
         <TouchableHighlight onPress={this._onPressButton}>
     <Text style={styles.touchableText}>Hello World</Text>
   </TouchableHighlight>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 50,
      height: '100%',
      backgroundColor: 'white'
    },
    floaterBar: {
      height: 30,
      fontSize: 20,
      color: 'blue'
    }
});
