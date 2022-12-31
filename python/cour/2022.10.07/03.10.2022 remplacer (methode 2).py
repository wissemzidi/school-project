ph = str(input("donner un text : "))

while (
    ph == ""
    or not ("A" <= ph[0] <= "Z")
    or ph[-1] != "."
    or ph.find(" ") == -1
    or ph.find("  ") != -1
):
    print("paragraphe non valid")
    ph = str(input("donner un text : "))

m1 = str(input("le mot pour le remplacer : "))
while m1 == "":
    m1 = str(input("le mot pour le remplacer : "))
m2 = str(input("le mot pour l'ajouter : "))
while m2 == "":
    m2 = str(input("le mot pour l'ajouter : "))

nb = 0
while ph.find(m1) != -1:
    nb += 1
    beg = ph.find(m1)
    end = beg + len(m1)
    ph = ph[:beg] + m2 + ph[end:]
print(ph)


new_p = ""

i = 0
while ph.find(" ") != -1:
    if ph[i] == " ":
        a = ph[0:i]
        if a == m1:
            a = m2
        new_p += a + " "
        ph = ph[i + 1 :]
        i = 0
    else:
        i += 1

if ph[:-1] == m1:
    ph = m2 + "."

print(new_p + ph)
