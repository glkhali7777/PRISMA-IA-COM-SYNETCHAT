
export interface SignalData {
  pair: string;
  timeframe: number;
  next_direction: "call" | "put";
  confidence: number;
  predicted_close_price: number;
  timestamp?: number;
  volume?: number;
  manipulation?: number;
}

export interface LogEntry {
  id: string;
  timestamp: number;
  message: string;
  type: 'info' | 'success' | 'error' | 'signal';
  details?: string;
}

export interface TradeStats {
  totalTrades: number;
  wins: number; // Note: Since we can't verify wins without a balance API, we track signals sent
  lastSignalTime: number | null;
}

export interface AppState {
  isConnected: boolean;
  autoTrade: boolean;
  selectedTimeframe: number;
  amount: number;
}
