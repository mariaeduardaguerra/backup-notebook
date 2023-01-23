function maskTel() {
    // pegar no HTML
    var $tel = document.getElementById("telefone").value;
    // modificar
    $tel = $tel.slice(0,14)
    // devolver pro HTML
    document.getElementById("telefone").value = $tel;

    // máscara (essa variável deve ter um nome diferente da primeira)
    var tel = document.getElementById("telefone").value;

    if (tel[0] != "(")
    {
        if (tel[0] != undefined)
        {
            document.getElementById("telefone").value = "(" + tel[0];
        }
    }

    if (tel[3] != ")")
    {
        if (tel[3] != undefined)
        {
            document.getElementById("telefone").value = tel.slice(0,3) + ")" + tel[3];
        }
    }

    if (tel[4] != " ")
    {
        if (tel[4] != undefined)
        {
            document.getElementById("telefone").value = tel.slice(0,4) + " " + tel[4];
        }
    }

    if (tel[9] != "-")
    {
        if (tel[9] != undefined)
        {
            document.getElementById("telefone").value = tel.slice(0,9) + "-" + tel[9];
        }
    }
}

function maskCPF() {
    // pegar no HTML
    var $cpf = document.getElementById("cpf").value;
    // modificar
    $cpf = $cpf.slice(0,14)
    // devolver pro HTML
    document.getElementById("cpf").value = $cpf;


    // máscara (essa váriavel deve ter um nome diferente da primeira)
    var cpf = document.getElementById("cpf").value;

    if (cpf[3] != ".")
    {
        if (cpf[3] != undefined)
        {
            document.getElementById("cpf").value = cpf.slice(0,3) + "." + cpf[3];
        }
    }

    if (cpf[7] != ".")
    {
        if (cpf[7] != undefined)
        {
            document.getElementById("cpf").value = cpf.slice(0,7) + "." + cpf[7];
        }
    }

    if (cpf[11] != "-")
    {
        if (cpf[11] != undefined)
        {
            document.getElementById("cpf").value = cpf.slice(0,11) + "-" + cpf[11];
        }
    }
}

