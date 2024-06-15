save_person = {
    'type' : 'object',
    'propierties' : {
        'name': {'type' : 'string'},
        'dni': {'type' : 'string'},
        'last_name': {'type' : 'string'},
        'email': {'type' : 'string'},
        'password': {'type' : 'string'}
    },
    'required' : ['name','dni', 'last_name','email', 'password']
}

edit_person = {
    'type' : 'object',
    'propierties' : {
        'name': {'type' : 'string'},
        'dni': {'type' : 'string'},
        'last_name': {'type' : 'string'}
    },
    'required' : ['name','dni', 'last_name']
}

edit_person_email = {
    'type' : 'object',
    'propierties' : {
        'email': {'type' : 'string'},
        'password': {'type' : 'string'}
    },
    'required' : ['email','password']
}