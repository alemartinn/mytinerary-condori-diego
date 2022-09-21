export default function MessagesBack(title) {
    let messageBack = ''
    switch (title) {
        case 'NAME_TOO_SHORT': 
            messageBack = "Name is too short"
            break;
        case 'NAME_TOO_LARGE':
            messageBack = "Name is too large"
            break;
        case 'INVALID_MIN_PRICE':
            messageBack = "The minimum price is $0"
            break;
        case 'PRICE_TOO_MUCH':
            messageBack = "The maximum price is $100000"
            break;
        case 'TAGS_REQUIRED':
            messageBack = "Tags are required"
            break;
        case 'DURATION_REQUIRED':
                messageBack = "Duration is required"
                break;
        case 'INVALID_MIN_DURAT':
                messageBack = "Minimum duration is invalid"
            break;
        case 'DURAT_TOO_MUCH':
                messageBack = "Maximum duration is invalid"
                break;
        case 'DESCR_TOO_SHORT':
            messageBack = "Short description"
            break;
        case 'DESCR_TOO_LARGE':
            messageBack = "Large description"
            break;
        default:
            messageBack = title
            break;
    }
  return messageBack
}
