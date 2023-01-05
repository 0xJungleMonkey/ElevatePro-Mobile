// The DetailsScreen component is also a functional component
// displays a list with a subheader and an item.
// It retrieves the title and content parameters from the route prop and displays them in the list.
import { List, Section, Subheader, Item } from "react-native-paper";
export default DetailsScreen = (props) => {
  const { item, i } = props?.route?.params;
  return (
    <List.Section>
      <List.Subheader>{item.status}</List.Subheader>
      <List.Item title={i} />
    </List.Section>
  );
};
