var searchIndex = {};
searchIndex['encryptfile'] = {"items":[[0,"","encryptfile","This library provides an interface to Rust Crypto([1]) for encrypting and decrypting files.\nIt provides the following features:",null,null],[3,"Config","","",null,null],[12,"mode","","",0,null],[12,"input_stream","","",0,null],[12,"output_stream","","",0,null],[12,"output_format","","",0,null],[12,"rng_mode","","",0,null],[12,"initialization_vector","","",0,null],[12,"password","","",0,null],[12,"salt","","",0,null],[12,"encryption_method","","",0,null],[12,"buffer_size","","",0,null],[3,"ScryptR","","",null,null],[3,"ScryptP","","",null,null],[3,"ScryptLogN","","",null,null],[4,"PasswordType","","",null,null],[13,"Unknown","","",1,null],[13,"Text","","",1,null],[13,"Data","","",1,null],[13,"Func","","",1,null],[4,"PasswordKeyGenMethod","","",null,null],[13,"Scrypt","","",2,null],[4,"InitializationVector","","",null,null],[13,"Unknown","","",3,null],[13,"GenerateFromRng","","",3,null],[13,"Func","","",3,null],[4,"RngMode","","",null,null],[13,"Os","","",4,null],[13,"OsIssac","","",4,null],[13,"OsRandIssac","","",4,null],[13,"Func","","",4,null],[4,"InputStream","","",null,null],[13,"Unknown","","",5,null],[13,"File","","",5,null],[4,"Mode","","",null,null],[13,"Unknown","","",6,null],[13,"Encrypt","","",6,null],[13,"Decrypt","","",6,null],[4,"OutputStream","","",null,null],[13,"Unknown","","",7,null],[13,"File","","",7,null],[4,"FileOptions","","",null,null],[13,"None","","",8,null],[13,"AllowOverwrite","","",8,null],[4,"EncryptError","","",null,null],[13,"ValidateFailed","","",9,null],[13,"OsRngFailed","","",9,null],[13,"OutputFileExists","","",9,null],[13,"PwKeyIsZeroed","","",9,null],[13,"IvIsZeroed","","",9,null],[13,"IvEqualsCheckValue","","",9,null],[13,"HeaderTooSmall","","",9,null],[13,"ShortIvRead","","",9,null],[13,"ShortHmacRead","","",9,null],[13,"BadHeaderMagic","","",9,null],[13,"UnexpectedVersion","","",9,null],[13,"InvalidHmacLength","","",9,null],[13,"HmacMismatch","","",9,null],[13,"UnexpectedEnumVariant","","",9,null],[13,"ByteOrderError","","",9,null],[13,"IoError","","",9,null],[13,"CryptoError","","",9,null],[13,"InternalError","","",9,null],[5,"default_scrypt_params","","",null,{"inputs":[],"output":{"name":"passwordkeygenmethod"}}],[5,"make_scrypt_key","","",null,{"inputs":[{"name":"str"},{"name":"str"},{"name":"scryptlogn"},{"name":"scryptr"},{"name":"scryptp"}],"output":{"name":"pwkeyarray"}}],[5,"generate_iv","","",null,{"inputs":[{"name":"config"}],"output":{"name":"result"}}],[5,"process","","",null,{"inputs":[{"name":"config"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"config"}],"output":{"name":"self"}}],[11,"decrypt","","",0,{"inputs":[{"name":"config"}],"output":{"name":"self"}}],[11,"encrypt","","",0,{"inputs":[{"name":"config"}],"output":{"name":"self"}}],[11,"input_stream","","",0,{"inputs":[{"name":"config"},{"name":"inputstream"}],"output":{"name":"self"}}],[11,"output_stream","","",0,{"inputs":[{"name":"config"},{"name":"outputstream"}],"output":{"name":"self"}}],[11,"rng_mode","","",0,{"inputs":[{"name":"config"},{"name":"rngmode"}],"output":{"name":"self"}}],[11,"initialization_vector","","",0,{"inputs":[{"name":"config"},{"name":"initializationvector"}],"output":{"name":"self"}}],[11,"password","","",0,{"inputs":[{"name":"config"},{"name":"passwordtype"}],"output":{"name":"self"}}],[11,"salt","","",0,{"inputs":[{"name":"config"},{"name":"string"}],"output":{"name":"self"}}],[11,"encryption_method","","",0,{"inputs":[{"name":"config"},{"name":"encryptionmethod"}],"output":{"name":"self"}}],[11,"buffer_size","","",0,{"inputs":[{"name":"config"},{"name":"usize"}],"output":{"name":"self"}}],[11,"validate","","",0,{"inputs":[{"name":"config"}],"output":{"name":"result"}}],[6,"PwKeyArray","","",null,null],[6,"IvArray","","",null,null],[17,"PW_KEY_SIZE","","",null,null],[17,"IV_SIZE","","",null,null],[8,"SeekRead","","",null,null],[8,"SeekWrite","","",null,null],[11,"fmt","","",9,{"inputs":[{"name":"encrypterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",9,{"inputs":[{"name":"encrypterror"},{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",9,{"inputs":[{"name":"encrypterror"},{"name":"error"}],"output":{"name":"self"}}]],"paths":[[3,"Config"],[4,"PasswordType"],[4,"PasswordKeyGenMethod"],[4,"InitializationVector"],[4,"RngMode"],[4,"InputStream"],[4,"Mode"],[4,"OutputStream"],[4,"FileOptions"],[4,"EncryptError"]]};
initSearch(searchIndex);