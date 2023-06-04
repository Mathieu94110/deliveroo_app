import { Text, TouchableOpacity } from 'react-native';

const HeaderButton = (props: any) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
    }}
    className="text-base py-1.5 px-4 rounded-3xl"
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{ color: props.activeTab === props.text ? 'text-white' : 'text-black' }}
      className="font-black"
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderButton;
