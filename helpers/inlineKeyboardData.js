const MyKeyboard = data => {
    const son = data.length;
    switch(son){
        case 1: {
            return [
                [{text: '1', callback_data: data[0].file_id}]
            ]
        }
        case 2: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}]
            ]
        }
        case 3: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}]
            ]
        }
        case 4: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}, {text: '4', callback_data: data[3].file_id}]
            ]
        }
        case 5: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}, {text: '4', callback_data: data[3].file_id}],
                [{text: '5', callback_data: data[4].file_id},]
            ]
        }
        case 6: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}, {text: '4', callback_data: data[3].file_id}],
                [{text: '5', callback_data: data[4].file_id}, {text: '6', callback_data: data[5].file_id},]
            ]
        }
        case 7: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}, {text: '4', callback_data: data[3].file_id}],
                [{text: '5', callback_data: data[4].file_id}, {text: '6', callback_data: data[5].file_id}, {text: '7', callback_data: data[6].file_id}]
            ]
        }
        case 8: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}, {text: '4', callback_data: data[3].file_id}],
                [{text: '5', callback_data: data[4].file_id}, {text: '6', callback_data: data[5].file_id}, {text: '7', callback_data: data[6].file_id}, {text: '8', callback_data: data[7].file_id}]
            ]
        }
        case 9: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}, {text: '4', callback_data: data[3].file_id}],
                [{text: '5', callback_data: data[4].file_id}, {text: '6', callback_data: data[5].file_id}, {text: '7', callback_data: data[6].file_id}, {text: '8', callback_data: data[7].file_id}, {text: '9', callback_data: data[8].file_id}]
            ]
        }
        case 10: {
            return [
                [{text: '1', callback_data: data[0].file_id}, {text: '2', callback_data: data[1].file_id}, {text: '3', callback_data: data[2].file_id}, {text: '4', callback_data: data[3].file_id}],
                [{text: '5', callback_data: data[4].file_id}, {text: '6', callback_data: data[5].file_id}, {text: '7', callback_data: data[6].file_id}, {text: '8', callback_data: data[7].file_id}, {text: '9', callback_data: data[8].file_id}, {text: '10', callback_data: data[9].file_id},]
            ]
        }
    }
}


module.exports = {MyKeyboard}