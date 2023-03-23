import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as SMS from 'expo-sms';
import { Header } from 'react-native/Libraries/NewAppScreen';

const phones = ['380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789',
'380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789',
'380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789',
'380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789',
'380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789',
'380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789',
'380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789',
'380672133456', '380673456789','380672133456', '380673456789','380672133456', '380673456789'];
const txts = ['test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5',
'test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5',
'test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5',
'test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5',
'test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5',
'test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5',
'test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5',
'test abonen 1 3', 'test abonen 2 3','test abonen 1 4', 'test abonen 2 4','test abonen 1 5', 'test abonen 2 5'];

// async function send_sms(phone,sms){
//   const { result } = await SMS.sendSMSAsync(
//   phone,
//   sms,
//   // {
//   //   attachments: {
//   //     uri: 'path/myfile.png',
//   //     mimeType: 'image/png',
//   //     filename: 'myfile.png',
//   //   },
//   // }
  
//   )
//   return result + " " + phone
// }


export default function App() {
  // let result = "";

  // result += await send_sms(phones[0], txts[0])
  // console.log(result)
  // result += await send_sms(phones[1], txts[1])
  // console.log(result)
    // phones.forEach(async (phone,i)=>{
    //   let result_sms = await send_sms(phone, txts[i])
    //   // console.log(result_sms)
    //   // result += result_sms + '\n';
    // })


  return (
    <View style={styles.container}>
      <Text>SMS to send:</Text>
      <Text>SMS to send:</Text>
      <Text>SMS to send:</Text>
      <ScrollView>
        {
          phones.map(
          (p,i)=>{
            return (<Button 
                      key ={p+" "+i} 
                      title={p+" "+txts[i]} 
                      onPress={
                        async ()=>{
                          const isAvailable = await SMS.isAvailableAsync();
                          if (isAvailable) {
                            const { result } = await SMS.sendSMSAsync(
                              [p],
                              txts[i]
                            )
                            if (result === 'sent'){
                              this.color = "#149911"
                              console.log(`${i}.${p} sent reult = ${result}`)
                            }
                            else 
                              console.log(`${i}.${p} not sent ${result}`)
                          } else {
                            Alert("${i}..${p} misfortune... there's no SMS available on this device");
                          }                          
                        }
                      } 
                    />)
                    }
                  )
        }
        
      </ScrollView>
    
    
      {/* <Button onClick={()=>send_sms(phones[0], txts[0])}>{phone + " " + txts[i]}</Button> */}
      {/* <ul>
        {phones.map((phone,i)=><Button onClick={()=>send_sms(phones, txts[i])}>{phone + " " + txts[i]}</Button>)}
      </ul> */}
      
      {/* <Text>SEND YOUR SMS RESULT :</Text> */}
      {/* <Text>SEND YOUR SMS RESULT :</Text>
      <Text>{result}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
