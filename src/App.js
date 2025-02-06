import './App.css';
import {Button, Card, DatePicker, Form, Input} from "antd";
import axios from 'axios';

function App() {
    const [form] = Form.useForm();
    const {RangePicker} = DatePicker;

    const sendData = async (data) => {
        const url = 'https://prime-auto.by/send-application';
        const dataForSend = {
            name: data?.name,
            phone: '+375 (99) 999-99-99',
            message: data?.date,
            agreement: true
        };

        try {
            const response = await axios.post(url, dataForSend);
            console.log('Ответ сервера:', response.data);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return (
        <div className="App">
            <Card style={{width: '80%', margin: '100px auto'}}>
                <div style={{padding: '20px', fontSize: '20px', fontWeight: 'bold'}}>
                    Выберите период дат бронирования встречи с Дмитрием
                </div>

                <Form form={form}>
                    <Form.Item name="name" required>
                        <Input
                            placeholder="Введите ваше имя"
                            style={{maxWidth: '200px'}}
                        />
                    </Form.Item>
                    <Form.Item name="date" required>
                        <DatePicker/>
                    </Form.Item>
                </Form>

                <Button type="primary"
                        onClick={() => sendData({
                            name: form.getFieldsValue()?.name,
                            date: form.getFieldsValue()?.date.toLocaleString(),
                        })}>Отправить</Button>

                <div style={{padding: '20px', fontSize: '10px'}}>
                    Для девушек у которых имя заканчивается на "Дарья", а фамилия на "Войтехович", действует скидка 100%
                    на все услуги.
                </div>
            </Card>
        </div>
    );
}

export default App;
