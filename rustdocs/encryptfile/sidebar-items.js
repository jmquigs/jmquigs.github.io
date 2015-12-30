initSidebarItems({"constant":[["IV_SIZE",""],["PW_KEY_SIZE",""]],"enum":[["EncryptError",""],["InitializationVector","Specifies the initialization vector.  Note, when decrypting, you do not need to specify this since the IV is in the file."],["InputStream","Data input streams."],["Mode","The current encryption mode.  Initially set to Unknown."],["OutputOption","Output options."],["OutputStream","Data output streams."],["PasswordKeyGenMethod","Controls how the encryption key is generated from a text password."],["PasswordType","Specifies the encryption password."],["RngMode","Controls how random numbers are generated whenever they are needed by this library. Currently this is only required when generating an initialization vector (`InitializationVector::GenerateFromRng`).  Note, when decrypting, you do not need to specify this."]],"fn":[["process","Process the config and produce the result.  This function does not \"consume\" the config, so it can be reconfigured and reused after `process()` returns."],["scrypt_defaults","Returns a set of default scrypt parameters: LogN 16, R 8, P 1. See http://www.tarsnap.com/scrypt/scrypt-slides.pdf for more details."],["scrypt_params_encrypt1","Returns a set of scrypt parameters tuned for file encryption: LogN 20, R 8, P 1 See http://www.tarsnap.com/scrypt/scrypt-slides.pdf for more details."]],"struct":[["Config","The main Configuration type.  This is a Builder object [1]."],["ScryptLogN","The Scrypt LogN parameter."],["ScryptP","The Scrypt P parameter."],["ScryptR","The Scrypt R parameter."]],"type":[["IvArray",""],["PwKeyArray",""]]});