
muj_seznam = [15, 22, 14, 23, 17]

muj_seznam.append(34)
muj_seznam.append(11)


def zmensi_pole_o_deset(_muj_seznam):
    
    zmenseny_seznam = []

    for i in range(len(_muj_seznam) - 1, 0, -1):
        prvek = _muj_seznam[i]
        vysledek = prvek + 10
        print("Původní prvek je " + str(prvek) + ", nový prvek je " + str(vysledek))
        print(prvek)
        zmenseny_seznam.append(vysledek)

    return zmenseny_seznam


print(zmensi_pole_o_deset(muj_seznam))

