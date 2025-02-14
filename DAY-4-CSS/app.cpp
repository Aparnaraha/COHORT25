

#include <bits>

void strassen(int A[], int B[])
{
  if (len(A) == 1 && len(B) == 1)
    return A * B;

  int A11 = A[0][0], A12 = A[0][1], A21 = A[1][0], A22 = A[1][1];
  int B11 = B[0][0], B12 = B[0][1], B21 = B[1][0], B22 = B[1][1];

  int P, Q, R, S, T, U, V;

  // Calculate P = (A11 + A22) * (B11 + B22)
  P = (A11 + A22) * (B11 + B22);

  // Calculate Q = (A21 + A22) * B11
  Q = (A21 + A22) * B11;

  // Calculate R = A11 * (B12 - B22)
  R = A11 * (B12 - B22);

  // Calculate S = A22 * (B21 - B11)
  S = A22 * (B21 - B11);

  // Calculate T = (A11 + A12) * B22
  T = (A11 + A12) * B22;

  // Calculate U = (A21 - A11) * (B11 + B12)
  U = (A21 - A11) * (B11 + B12);

  // Calculate V = (A12 - A22) * (B21 + B22)
  V = (A12 - A22) * (B21 + B22);

  // Calculate the resulting matrix C
  C[0][0] = P + S - T + V;
  C[0][1] = R + T;
  C[1][0] = Q + S;
  C[1][1] = P + R - Q + U;
}

