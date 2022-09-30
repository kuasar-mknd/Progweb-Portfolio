/******************************************************************************
 *  Execution:    java nom_du_fichier.java
 *  
 *  Compte jusqu'à 23 moutons dans le terminal. 
 *
 *  1er Mouton
 *  2e Mouton 
 *  3e Mouton
 *  4e Mouton
 *  ...
 *  23e Mouton
 *
 *****************************************************************************

 public class CompteMoutons { 
    public static void main(String[] args) {
        // Affiche le cas ordinal spécial pour "premier"
        System.out.println("1er Mouton");
        // compte de 2 à 23
        int i = 2;
        while (i <= 23) {
            System.out.println(i + "e Mouton");
            i = i + 1;
        }
    }
}
*/
compteMoutons();

function compteMoutons() {
  console.log("1er Mouton");
  for (let i = 2; i <= 23; i++) {
    console.log(i + "e Mouton");
  }
}
