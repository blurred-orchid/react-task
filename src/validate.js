export class Validate{
    static isValid(data){
        let type = ['vk', 'telegram', 'youtube'];
        let status = ['inactive', 'active'];
        return(
            typeof(data) == 'object'
            && typeof(data.name) == 'string'
            && data.name.length > 0
            && typeof(data.logo) == 'string'
            && typeof(data.type) == 'string'
            && type.includes(data.type) 
            && typeof(data.status) == 'string'
            && status.includes(data.status)
            && (data.logo.startsWith("http://") 
                || data.logo.startsWith("https://"))
        );
    }
}