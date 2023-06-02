# Rest Sample evo

## About

This apis help to developer team to improve there are specificaction API to have a hight grade.

### Main Goal

The main objective of this API is to obtain the grade to a specification.

### Specifics

This API applies the REST protocol and in order to integrate with it.

## Usage

In this section you will find all the URLs that you will need in order to integrate with the service.

## POD URLs

### **PRO**

- PRO: <https://logistica.central.inditex.grp/tmsapicp>
- PRO-JANUS: <https://logistica.central.inditex.grp/tmsapicp-jwt>
- Example: tmsapicp

### **PRE**

- PRE: <https://logistica-pre.central.inditex.grp/tmsapicp>
- PRE-JANUS: <https://logistica-pre.central.inditex.grp/tmsapicp-jwt>
- Example: tmsapicp

### **DES**

- DES: <https://des-openshift.axdesocp1.central.inditex.grp/tmsapicp-develop>
- DES-JANUS: <https://des-openshift.axdesocp1.central.inditex.grp/tmsapicp-develop-jwt>
- Example: tmsapicp

In order to use this API the consumer needs to have the rate or the the menu_bar role assigned. The permissions will be acquired via Heimdal.

### Configuration

The authentication is based on the basic protocol and the main requirement in order to use this API is to have a known Group ID in order to apply any of the operations to it's container.

### Example

**Invocation example of change rate**
Endpoint **/api/v1/rate**

In this example, the "consolidator" login rate and "LEXCROCO" jirakey will be modified to 4

Request

```json
{
    "login": "consolidador",
    "jirakey": "LEXCROCO",
    "appkey": "LEX",
    "rate": 4,
    "description": "12345"
}
```

Response

```json
{
    "login": "consolidador",
    "jirakey": "LEXCROCO",
    "appkey": "LEX",
    "rate": 4,
    "description": "12345",
    "rateDate": "2022-05-23T09:43:09.5287518Z",
    "requestFeedback": null,
    "popUpMessage": null,
    "blocking": null
}
```

## Documentation

For more information you can contact the Transport Department at.

## Contact

Please contact with Jaime Blanco Puga (jaimebp) for any subject regarding this API.
